using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebappTasks.Models;

namespace WebappTasks.Controllers.Task48
{
    [ApiController]
    [Route("task48/Update")]
    public class UpdateController : ControllerBase
    {
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update(
            [FromForm] CreateImageRequest request)
        {
            try
            {
                // Check the image
                if (request.Image == null || request.Image.Length == 0)
                    return BadRequest("Image is required");

                // Check the owner
                if (string.IsNullOrWhiteSpace(request.Owner))
                    return BadRequest("Owner is required");

                // Check JPG extension
                string fileName = Path.GetFileName(request.Image.FileName);

                if (Path.GetExtension(fileName).ToLowerInvariant() != ".jpg")
                    return BadRequest("Only JPG images are allowed");

                // Get the image and metadata paths
                string uploadsFolder = Path.Combine(
                    Directory.GetCurrentDirectory(), "Uploads");

                string imagePath = Path.Combine(uploadsFolder, fileName);
                string metadataPath = imagePath + ".json";

                // The file must already exist
                if (!System.IO.File.Exists(imagePath) ||
                    !System.IO.File.Exists(metadataPath))
                {
                    return BadRequest("File does not exist");
                }

                // Read the metadata
                string json = await System.IO.File.ReadAllTextAsync(metadataPath);

                ImageMetadata? metadata =
                    JsonSerializer.Deserialize<ImageMetadata>(json);

                if (metadata == null)
                    return StatusCode(500, "Invalid metadata");

                // Check the owner
                if (metadata.Owner != request.Owner)
                    return StatusCode(403, "Forbidden");

                // Replace the old image
                using (var stream = new FileStream(
                    imagePath, FileMode.Create, FileAccess.Write))
                {
                    await request.Image.CopyToAsync(stream);
                }

                // Update modification time
                metadata.LastModificationTime = DateTime.UtcNow;

                // Save updated metadata
                string updatedJson = JsonSerializer.Serialize(
                    metadata,
                    new JsonSerializerOptions { WriteIndented = true });

                await System.IO.File.WriteAllTextAsync(
                    metadataPath, updatedJson);

                return Ok("Updated successfully");
            }
            catch
            {
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}