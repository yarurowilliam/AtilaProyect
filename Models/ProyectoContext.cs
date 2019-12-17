using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtilaV1.Models
{
    public class ProyectoContext : IdentityDbContext
    {
        public ProyectoContext(DbContextOptions<ProyectoContext> options) :
        base(options)
        {
        }
        public DbSet<Asignatura> Asignaturas { get; set; }
        public DbSet<Docente> Docentes { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Rubrica> Rubricas { get; set; }
        public DbSet<Estudiante> Estudiantes { get; set; }
        public DbSet<Proyecto> Proyectos { get; set; }
        public DbSet<Convocatoria> Convocatorias { get; set; }
        public DbSet<Calificacion> Calificacions { get; set; }
    }
}