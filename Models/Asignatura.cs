using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace AtilaV1.Models
{

    public class Asignatura
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string NombreAsignatura { get; set; }
    }
}