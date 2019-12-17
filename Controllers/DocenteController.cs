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
    public class DocenteController : ControllerBase
    {
        
        private readonly ProyectoContext _context;
        public DocenteController(ProyectoContext context)
        {
            _context = context;

            if (_context.Docentes.Count() == 0)
            {
                _context.Docentes.Add(new Docente { Identificacion = "admin", PrimerApellido= "admin", SegundoApellido = "admin",PrimerNombre="admin",SegundoNombre="admin",Rol="Administrador",Telefono="1",Correo="admin@exposoftware.net",Password="admin"});
                _context.SaveChanges();
            }
        }   


        [HttpGet]
        public IEnumerable<Docente> Get()
        {
            return _context.Docentes;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocenteItem(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }
        
        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> PostDocenteItem(Docente item)
        {
            _context.Docentes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDocenteItem), new { id = item.Identificacion}, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocenteItem(string id, Docente item)
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
        public async Task<IActionResult> DeleteDocenteItem(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }

            _context.Docentes.Remove(docente);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}