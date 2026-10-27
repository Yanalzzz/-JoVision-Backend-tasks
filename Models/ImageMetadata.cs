namespace WebappTasks.Models
{
    public class ImageMetadata
    {
        public string FileName { get; set; } = "";
        public string Owner { get; set; } = "";
        public DateTime CreationTime { get; set; }
        public DateTime LastModificationTime { get; set; }
    }
}