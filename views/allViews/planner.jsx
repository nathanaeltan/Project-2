var React = require("react");

class Home extends React.Component {
  render() {


  let list = this.props.result.map(item =>{
    return(
      <option value={item.attraction_name} >{item.attraction_name}</option>
    )
  })
  
  const n = this.props.result[0].date_part; // Or something else

  let dayButtons = [...Array(n)].map((e, i) =><button type="button" class="btn btn-primary ml-3 mt-3" data-toggle="modal" data-target={".bd-modal-lg" + (i+ 1)}>Day {i + 1}</button> 
  )


  let modals= [...Array(n)].map((e, i) => <div class={"modal fade bd-modal-lg" + (i+ 1)} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
  <div class="modal-content">
  <h1>Day {i + 1}</h1>
  <form action="/schedule" method="POST">
  <input type="hidden" name="day" value = {"Day" + (i + 1)} className="dayNumber"/>
  <table class="table">
    <h2 className="lead"></h2>
<thead class="thead-dark">
<tr>
<th scope="col">Time: </th>
<th scope="col">Attraction: </th>
<th scope="col">Notes</th>

</tr>
</thead>
<tbody>
<tr>
<th scope="row">12:00am</th>
<th>  
    
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>

        {list}
        <input type="hidden" name="time" value="12:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1.5" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">1:00am</th>
<th>  

<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="1:00am"/>
      </select></th>
      

      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">2:00am</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="2:00am"/>

      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">3:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="3:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">4:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="4:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">5:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="5:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">6:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="6:00am"/>

      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">7:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="7:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">8:00am</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="8:00am"/>

      </select></th>

      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">9:00am</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="9:00am"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">10:00am</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="10:00am"/>

      </select></th>

      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">11:00am</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >


<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="11:00am"/>
      </select></th>

      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">12:00pm</th>
<th>  


<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="12:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">1:00pm</th>
<th> 

<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="1:00pm"/> 
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">2:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="2:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">3:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="3:00pm"/>

      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">4:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="4:00pm"/>

      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">5:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="5:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">6:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="6:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">7:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="7:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">8:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="8:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">9:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="9:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">10:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="10:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>
<tr>
<th scope="row">11:00pm</th>
<th>  
<select className="border-bottom" name="attraction" id="attraction" >
<option value="">--Please choose an Attraction--</option>
        {list}
        <input type="hidden" name="time" value="11:00pm"/>
      </select></th>
      <td> <textarea name="Notes" id="" cols="30" rows="1" placeholder="Note"></textarea></td>
</tr>


</tbody>
</table>
<button type="submit" className="btn btn-lg btn-success mb-3 save-btn">SAVE</button>
</form>
</div>
</div>
</div> )












    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <div className="container text-center mt-5">
          <h3 className="display-3 border-bottom">Start Planning Your Trip</h3>
          <h2>Travelling From <br/> {this.props.result[0].from_date.toString().slice(0, 15)} <br/> to <br/>{this.props.result[0].to_date.toString().slice(0, 15)}</h2>
      {dayButtons}

      {modals}
 
        <a href="/yourTrip" className="btn btn-success btn-block mt-4">Save Trip</a>
          </div>
          


          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
          <script src="/plannerajax.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
