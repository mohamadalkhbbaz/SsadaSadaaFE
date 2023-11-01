namespace Application.CustomExceptions
{
    public class ErrorsException : Exception
    {
        public IEnumerable<string> Errors { get; set; }
        public ErrorsException(IEnumerable<string> errors)
        {
            this.Errors = errors;
        }
        public ErrorsException(string error)
        {
            var errors = new List<string>();
            errors.Add(error);
            this.Errors = errors;
        }
    }
}
