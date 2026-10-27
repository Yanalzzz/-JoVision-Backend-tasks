using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebappTasks.Models;

namespace WebappTasks.Controllers.Task47
{
    [ApiController]
    [Route("task47/Create")]
    public class CreateController : ControllerBase
    {
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create(
            [FromForm] IFormFile image,
            [FromForm] string Owner)
        {
            try
            {
                if (image == null || image.Length == 0)
                {
                    return BadRequest("Image is required");
                }

                if (string.IsNullOrWhiteSpace(Owner))
                {
                    return BadRequest("Owner is required");
                }

                string extension = Path.GetExtension(image.FileName).ToLower();

                if (extension != ".jpg")
                {
                    return BadRequest("Only JPG images are allowed");
                }

                string fileName = Path.GetFileName(image.FileName);

                string uploadsFolder = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "Uploads"
                );

                Directory.CreateDirectory(uploadsFolder);

                string imagePath = Path.Combine(
                    uploadsFolder,
                    fileName
                );

                string metadataPath = imagePath + ".json";

                if (System.IO.File.Exists(imagePath))
                {
                    return BadRequest("A file with the same name already exists");
                }

                using (var stream = new FileStream(
                    imagePath,
                    FileMode.CreateNew))
                {
                    await image.CopyToAsync(stream);
                }

                var metadata = new ImageMetadata
                {
                    FileName = fileName,
                    Owner = Owner,
                    CreationTime = DateTime.UtcNow,
                    LastModificationTime = DateTime.UtcNow
                };

                string json = JsonSerializer.Serialize(
                    metadata,
                    new JsonSerializerOptions
                    {
                        WriteIndented = true
                    }
                );

                await System.IO.File.WriteAllTextAsync(
                    metadataPath,
                    json
                );

                return StatusCode(
                    201,
                    "Created"
                );
            }
            catch
            {
                return StatusCode(
                    500,
                    "Internal Server Error"
                );
            }
        }
    }
}