using api.Models;

namespace api.Services
{
    public interface IAuthService
    {
        public string LoginUser(User user);
    }

    public class AuthService: IAuthService
    {
        private static readonly List<User> users = new List<User>()
        {
            { new User(){ Username = "testing", Password = "testing" } },
            { new User(){ Username = "justine", Password = "dancel" } }
        };

        public string LoginUser(User user)
        {
            if (String.IsNullOrEmpty(user.Username) || String.IsNullOrEmpty(user.Password))
            {
                throw new Exception("Username & Password are both required.");
            }

            User dbUser = users.Find(x => x.Username == user.Username && x.Password == user.Password);

            if (dbUser == null)
            {
                throw new Exception("User could not be found.");
            }

           return "Logged in";
        }
    }
}
