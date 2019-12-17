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
    public class ProyectoController : ControllerBase
    {

        private readonly ProyectoContext _context;
        public ProyectoController(ProyectoContext context)
        {   
            _context = context;
        }


        [HttpGet]
        public IEnumerable<Proyecto> Get()
        {
            return _context.Proyectos;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Proyecto>> GetProyectoItem(string id)
        {
            var proyecto = await _context.Proyectos.FindAsync(id);
            if (proyecto == null)
            {
                return NotFound();
            }
            return proyecto;
        }

        [HttpPost]
        public async Task<ActionResult<Proyecto>> PostProyecto(Proyecto proyecto)
        {
            var item = await _context.Proyectos.FindAsync(proyecto.Codigo);
            if (item != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Proyectos.Add(proyecto);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProyectoItem), new { id = proyecto.Codigo }, proyecto);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProyectoItem(string id, Proyecto item)
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
        public async Task<IActionResult> DeleteProyectoItem(string id)
        {
            var proyecto = await _context.Proyectos.FindAsync(id);
            if (proyecto == null)
            {
                return NotFound();
            }

            _context.Proyectos.Remove(proyecto);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}