using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AtilaV1.Models;
using System;
using System.Collections;


namespace AtilaV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AsignaturaController : ControllerBase
    {

        private readonly ProyectoContext _context;

        public AsignaturaController(ProyectoContext context)
        {
            _context = context;

            if (_context.Asignaturas.Count() == 0)
            {
                _context.Asignaturas.Add(new Asignatura { Id ="FFF-000", NombreAsignatura = "Programacion Bajo Web" });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Asignatura> Get()
        {
            return _context.Asignaturas;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Asignatura>> GetAsignaturaItem(string id)
        {
            var asignatura = await _context.Asignaturas.FindAsync(id);
            if (asignatura == null)
            {
                return NotFound();
            }
            return asignatura;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Asignatura>> PostAsignaturaItem(Asignatura item)
        {
            _context.Asignaturas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAsignaturaItem), new { id = item.Id}, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsignaturaItem(string id, Asignatura item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsignaturaItem(string id)
        {
            var asignatura = await
            _context.Asignaturas.FindAsync(id);
            if (asignatura == null)
            {
                return NotFound();
            }
            _context.Asignaturas.Remove(asignatura);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }


}