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
    public class RubricaController : ControllerBase
    {
        private readonly ProyectoContext _context;
        public RubricaController(ProyectoContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public IEnumerable<Rubrica> Get()
        {
            return _context.Rubricas;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rubrica>> GetRubricaItem(string id)
        {
            var rubrica = await _context.Rubricas.FindAsync(id);
            if (rubrica == null)
            {
                return NotFound();
            }
            return rubrica;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Rubrica>> PostRubricaItem(Rubrica item)
        {
            _context.Rubricas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRubricaItem), new { id = item.Codigo}, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRubricaItem(string id, Rubrica item)
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
        public async Task<IActionResult> DeleteRubricaItem(string id)
        {
            var rubrica = await _context.Rubricas.FindAsync(id);
            if (rubrica == null)
            {
                return NotFound();
            }

            _context.Rubricas.Remove(rubrica);
            await _context.SaveChangesAsync();
            return NoContent();

        }

    }

}