namespace WebappTasks.Models
{
    public class CreateImageRequest
    {
        public IFormFile? Image { get; set; }

        public string? Owner { get; set; }
    }
}
