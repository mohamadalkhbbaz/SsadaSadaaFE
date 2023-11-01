using FluentValidation.Results;

namespace Application.CustomExceptions
{
    public class FluentValidationException : Exception
    {
        public List<ValidationFailure> ValidationFailures { get; protected set; }
        public FluentValidationException(List<ValidationFailure> validationFailures)
        {
            this.ValidationFailures = validationFailures;
        }
    }
}
