using Microsoft.AspNetCore.Mvc;

namespace WebappTasks.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BirthDateController : ControllerBase
    {
        [HttpGet]
        public string Get(
            [FromQuery] string? name,
            [FromQuery] int? years,
            [FromQuery] int? months,
            [FromQuery] int? days)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                name = "anonymous";
            }

            if (years == null || months == null || days == null)
            {
                return $"Hello {name}, I can't calculate your age without knowing your birthdate!";
            }

            DateTime birthDate = new DateTime(
                years.Value,
                months.Value,
                days.Value
            );

            DateTime today = DateTime.Today;

            int age = today.Year - birthDate.Year;

            if (birthDate.Date > today.AddYears(-age))
            {
                age--;
            }

            return $"Hello {name}, your age is {age}";
        }
    }
}