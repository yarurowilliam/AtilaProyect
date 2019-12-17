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
    public class CalificacionController : ControllerBase
    {
        
        private readonly ProyectoContext _context;
        public CalificacionController(ProyectoContext context)
        {
            _context = context;
        }   


        [HttpGet]
        public IEnumerable<Calificacion> Get()
        {
            return _context.Calificacions;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Calificacion>> GetCalificacionItem(string id)
        {
            var calificacion = await _context.Calificacions.FindAsync(id);
            if (calificacion == null)
            {
                return NotFound();
            }
            return calificacion;
        }
        
        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Calificacion>> PostCalificacionItem(Calificacion item)
        {
            _context.Calificacions.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCalificacionItem), new { id = item.Codigo}, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalificacionItem(string id, Calificacion item)
        {
            if (id != item.Codigo)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCalificacionItem(string id)
        {
            var calificacion = await _context.Calificacions.FindAsync(id);
            if (calificacion == null)
            {
                return NotFound();
            }

            _context.Calificacions.Remove(calificacion);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}