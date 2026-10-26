using Microsoft.AspNetCore.Mvc;

namespace WebappTasks.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GreeterController : ControllerBase
    {
        [HttpGet]
        public string Get([FromQuery] string? name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return "Hello anonymous";
            }

            return "Hello " + name;
        }
    }
}