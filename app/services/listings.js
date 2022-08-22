const listings = {data: [
    
  {
    "id": 201,
    title: "Watch",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1633869699811-cd4f63049b36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
      }
     ,
    price: 100,
    "categoryId": 5,
    "userId": 1,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 3,
    title: "Gray couch in a great condition",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
     ,
    "categoryId": 1,
    price: 1200,
    "userId": 2,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 1,
    title: "Bicycle (great condition) - delivery included",
    "description": "I'm selling my furniture at a discountprice Pick up at Venice. DM me asap.",
    "images": 
      {
        "url":"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
     
    price: 450,
    "categoryId": 1,
    "userId": 1,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 2,
    title: "Designer wear shoes",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1882&q=80"
      }
     ,
    "categoryId": 5,
    price: 100,
    "userId": 2,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 102,
    title: "Canon 400D (Great Condition)",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1520549233664-03f65c1d1327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      }
     ,
    price: 300,
    "categoryId": 3,
    "userId": 1,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 101,
    title: "Laptop for sale",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      }
     ,
    price: 550,
    "categoryId": 3,
    "userId": 1,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 4,
    title: "Brown couch - Delivery available",
    "description": "No rips no stains no odors",
    "images": 
      {
        "url": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      }
     ,
    "categoryId": 1,
    price: 950,
    "userId": 2,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  },
  {
    "id": 6,
    title: "Brown leather shoes",
    "images": 
      {
        "url":  "https://images.unsplash.com/photo-1638609348722-aa2a3a67db26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80"
      }
     ,
    "categoryId": 5,
    price: 50,
    "userId": 2,
    "location": {
      "latitude": 37.78825,
      "longitude": -122.4324
    }
  }
],
error : false,
loading : false
}

export default listings

export const addListing = (listing) => {
  const data = {}
  data.id = listings.data.length + 1
  data.title = listing.title;
  data.price = listing.price;
  data.categoryId = listing.category.value;
  data.description = listing.description;

  
    data.images = {
      name: "image" ,
      type: "image/jpeg",
      url:listing.images[0],
    }
  // listing.images.forEach((image, index) =>
  //   data.images = {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     url: image,
  //   }
// )
  ;

  if (listing.location)
    data.location = JSON.stringify(listing.location);
    console.log("data", data);
  return listings.data.push(data);
};

