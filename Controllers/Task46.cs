using Microsoft.AspNetCore.Mvc;

namespace WebappTasks.Controllers.Task46
{
    [ApiController]
    [Route("task46/BirthDate")]
    public class BirthDateController : ControllerBase
    {
        [HttpPost]
        [Consumes("multipart/form-data")]
        public string Post(
            [FromForm] string? name,
            [FromForm] int? years,
            [FromForm] int? months,
            [FromForm] int? days)
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