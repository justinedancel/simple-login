using api.Models;
using api.Services;
using Microsoft.Extensions.Logging;
using FakeItEasy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using api.Controllers;

namespace api.Tests.Controllers
{
    public class AuthServiceTests
    {
        [Fact]
        public void AuthService_Login_Return_Exception_NotFound()
        {
            // Arrange
            var user = new User() { Username = "Justine", Password = "Dancel" };

            var authService = new AuthService();

            // Act
            var exception = Assert.Throws<Exception>(() => authService.LoginUser(user));

            // Assert
            Assert.Equal("User could not be found.", exception.Message);
        }

        [Fact]
        public void AuthService_Login_Return_Exception_Invalid()
        {
            // Arrange
            var user = new User() { Username = "", Password = "" };

            var authService = new AuthService();

            // Act
            var exception = Assert.Throws<Exception>(() => authService.LoginUser(user));

            // Assert
            Assert.Equal("Username & Password are both required.", exception.Message);
        }

        [Fact]
        public void AuthService_Login_Return_Valid()
        {
            // Arrange
            var user = new User() { Username = "justine", Password = "dancel" };

            var authService = new AuthService();

            // Act
            var result = authService.LoginUser(user);

            // Assert
            Assert.Equal("Logged in", result);
        }
    }
}
