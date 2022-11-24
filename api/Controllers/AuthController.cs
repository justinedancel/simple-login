using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<User> _logger;
        private readonly IAuthService _authService;

        public AuthController(ILogger<User> logger, IAuthService authService)
        {
            _logger = logger;
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(User request)
        {
            string message;

            try
            {
                message = _authService.LoginUser(request);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, request);

                return BadRequest(ex.Message);
            }
            
            return message;
        }
    }
}
