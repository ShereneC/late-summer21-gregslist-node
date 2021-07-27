export default class Home {
  /**
   * 
   * @param {String} style 
   * @param {String} color 
   * @param {Number} color
   * @param {Number} price
   *  
   */
  constructor(data) {
    this.id = data._id
    this.imgUrl = data.imgUrl
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.price = data.price
    this.year = data.year
    this.levels = data.levels
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow  rounded">
            <div class="p-3">
              <div class="text-center">
              <img class="w-100" src=" ${this.imgUrl}" >
                  <p><b>Beds: ${this.bedrooms} - Baths: ${this.bathrooms}</b></p>
              </div>
              <p class="text-center"><em>$ ${this.price}</em></p>
          </div>
          <button class="btn btn-info btn-block" onclick="app.homesController.bidHome('${this.id}')">Bid</button>
          <button class="btn btn-warning btn-block mt-0" onclick="app.homesController.deleteHome('${this.id}')">Delete</button>
      </div>
  </div>
    `
  }
}