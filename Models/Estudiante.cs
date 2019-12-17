using System.ComponentModel.DataAnnotations;
namespace AtilaV1.Models
{

    public class Estudiante
    {
        [Key]
        public string Identificacion { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required, EmailAddress]
        public string Correo { get; set; }
    }
}