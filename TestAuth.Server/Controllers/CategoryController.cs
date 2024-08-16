﻿using Microsoft.AspNetCore.Mvc;
using TestAuth.Server.Data;
using TestAuth.Server.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestAuth.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {


        private readonly IRepository<Category> _repository;
        public CategoryController(IRepository<Category>repository) {

            _repository = repository;
        
        }



        [HttpGet]
        public async Task<ActionResult> GetAllCategory() 
        {
            var categoryList = await _repository.GetAll();
            return Ok(categoryList);
        }




    }
}
