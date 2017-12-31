using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
// using lol.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RestSharp;

namespace server.Controllers
{
    [Route("api/[controller]")]
    public class PlacesController : Controller
    {

        // public LolContext _db { get; private set; }
        // public StaticsController(LolContext db)
        // {
        //     _db = db;
        // }



        [HttpGet]
        public string Get()
        {
            var client = new RestClient("https://api.yelp.com/v3/businesses/search?term=food&latitude=37.786882&longitude=-122.399972");
            var request = new RestRequest(Method.GET);
            request.AddHeader("authorization", "Bearer mjcB8YxIQoX7cMBCvQ1_nagDAqIhXR0pBuuL_J2CYF5YD3j5E3BH8FEu_tGO9n996_Rcgb7Mz1jBY45NjdRGXWPQx9PFBn6Pr295djBnZsfpFF3seaZCq5TMIDxJWnYx");
            IRestResponse response = client.Execute(request);

            System.Console.WriteLine("response", response.Content.ToString());
            return response.Content.ToString();
        }
        // POST api/Summoners
        // [HttpPost]
        // public IEnumerable<Champion> Post([FromBody]Champion items)
        // {
        //     foreach (var item in items)
        //     {   
        //         var champion = new Champion(item.id, item.name);
        //         _db.Champions.Add(champion);
        //     }
        //         _db.SaveChanges();
        // }

        // PUT api/Summoners/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/Summoners/5
        // [HttpDelete("{id}")]
        // public string Delete(int id)
        // {
        //     _db.Remove(_db.Summoners.Find(id));
        //     _db.SaveChanges();
        //     return "Deleted";
        // }
    }
}
