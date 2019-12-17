using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AtilaV1.Models;

namespace AtilaV1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolController : ControllerBase
    {
        private List<NRol> _roles;
        public RolController()
        {
            _roles = new List<NRol>();
            _roles.Add(new NRol { RolName = "Administrador" });
            _roles.Add(new NRol { RolName = "Docente"});
            _roles.Add(new NRol { RolName = "Revisador"});
            _roles.Add(new NRol { RolName = "Calificador"});
        }
        [HttpGet]
        public IEnumerable<NRol> Get()
        {
            return _roles;
        }

        [HttpGet("{nombrerol}")]
        public NRol Get(string nombrerol)
        {
            return _roles.FirstOrDefault(t=>t.RolName== nombrerol);
        }
    }
}