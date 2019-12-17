using System.ComponentModel.DataAnnotations;
namespace AtilaV1.Models
{

    public class Convocatoria
    {
        [Key]
        public string Periodo { get; set; }
        [Required]
        public string FechaInicio { get; set; }
        [Required]
        public string FechaFin { get; set; }
    }
}