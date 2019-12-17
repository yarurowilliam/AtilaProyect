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
    public class ConvocatoriaController : ControllerBase
    {

        private readonly ProyectoContext _context;
        public ConvocatoriaController(ProyectoContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IEnumerable<Convocatoria> Get()
        {
            return _context.Convocatorias;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Convocatoria>> GetConvocatoriaItem(string id)
        {
            var convocatoria = await _context.Convocatorias.FindAsync(id);
            if (convocatoria == null)
            {
                return NotFound();
            }
            return convocatoria;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Convocatoria>> PostConvocatoriaItem(Convocatoria item)
        {
            var verificar = await _context.Convocatorias.FindAsync(item.Periodo);
            if (verificar != null)
            {
                return BadRequest();
            }
            else
            {
                string fechaIni = item.FechaInicio;
                string fechaF = item.FechaFin;
                DateTime fechaf = DateTime.Parse(fechaF);
                DateTime fecha = DateTime.Parse(fechaIni);
                if (fechaf.Date < fecha.Date)
                {
                    return BadRequest();
                }
                else
                {
                    _context.Convocatorias.Add(item);
                    await _context.SaveChangesAsync();
                    return CreatedAtAction(nameof(GetConvocatoriaItem), new { id = item.Periodo }, item);
                }
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutConvocatoriaItem(string id, Convocatoria item)
        {
            if (id != item.Periodo)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConvocatoriaItem(string id)
        {
            var convocatoria = await _context.Convocatorias.FindAsync(id);
            if (convocatoria == null)
            {
                return NotFound();
            }

            _context.Convocatorias.Remove(convocatoria);
            await _context.SaveChangesAsync();
            return NoContent();

        }



    }


}