using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using AtilaV1.Models;
using System;
using System.Collections;


namespace AtilaV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        
        private readonly ProyectoContext _context;
        public EstudianteController(ProyectoContext context)
        {
            _context = context;

            if (_context.Estudiantes.Count() == 0)
            {
                _context.Estudiantes.Add(new Estudiante { Identificacion = "1067731160", Apellidos= "TORRES CALEÑO", Nombres = "JEAN CARLOS",Correo="ESTUDIANTE@EXPOSOFTWARE.NET"});
                _context.SaveChanges();
            }
        }   


        [HttpGet]
        public IEnumerable<Estudiante> Get()
        {
            return _context.Estudiantes;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetEstudianteItem(string id)
        {
            var estudiante = await _context.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }
            return estudiante;
        }
        
        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Estudiante>> PostEstudianteItem(Estudiante item)
        {
            _context.Estudiantes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudianteItem), new { id = item.Identificacion}, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudianteItem(string id, Estudiante item)
        {
            if (id != item.Identificacion)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudianteItem(string id)
        {
            var estudiante = await _context.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }

            _context.Estudiantes.Remove(estudiante);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}