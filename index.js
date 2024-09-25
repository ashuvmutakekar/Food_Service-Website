import express  from "express";
import mysql from "mysql";
import cors from "cors";
 const app= express()
 app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"restaurant"
})

app.get("/",(req,res)=>{
   res.json("hello this is the backend")
})
//new table abb product
app.get("/Add_product",(req,res)=>{
   const q="select * from tbl_addproduct"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
//get method to retrive method
app.get("/Feedback",(req,res)=>{
   const q="select * from tbl_feedback"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
app.get("/menu", (req, res) => {
   const q = "SELECT img_data, description, p_name FROM tbl_addproduct";
   db.query(q, (err, data) => {
     if (err) {
       return res.json(err);
     }
     return res.json(data);
   });
 });
 app.get("/get_orders",(req,res)=>{
   const q="SELECT * FROM tbl_oederdetails o1 LEFT JOIN tbl_order o2 ON o1.order_no = o2.order_no";
   db.query(q,(err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
   })
})
app.get("/OrderPaymentDetails", (req, res) => {
   const q = "SELECT * FROM tbl_oederdetails o1 LEFT JOIN tbl_payment o2 ON o1.order_no = o2.o_no WHERE o2.status = 'Paid'";
   db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
   });
});


app.get("/OrderProductDetails",(req,res)=>{
   const q="select * from tbl_oederdetails"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
app.get("/menu", (req, res) => {
   const q = "SELECT category,sub_category, description,price, p_name FROM tbl_addproduct";
   db.query(q, (err, data) => {
     if (err) {
       return res.json(err);
     }
     return res.json(data);
   });
 });
app.get("/Order_Details",(req,res)=>{
   const q="select * from tbl_order"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
app.get("/get",(req,res)=>{
   const q="select * from tbl_addcategory"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
app.get("/get_productlist",(req,res)=>{
   const q="select * from tbl_addproduct"
   db.query(q,(err,data)=>{

      if(err)return res.json(err)
      return res.json(data)
   })
})
app.get('/total-sum', async (req, res) => {
   try {
     const connection = await pool.getConnection();
     const [rows] = await connection.query('SELECT SUM(total) AS totalSum FROM tbl_oederdetails');
     connection.release();
     res.json({ totalSum: rows[0].totalSum });
   } catch (error) {
     console.error('Error executing query:', error);
     res.status(500).json({ error: 'Internal server error' });
   }
 });
 

app.get("/getproduct/:p_id", (req, res) => {
   const p_id = req.params.p_id; // Get the c_id from request parameters
   const q = "SELECT p_name, price, description, img_name, sub_category, category FROM tbl_addproduct WHERE p_id = ?";

   // Log the received request data (not res.data, as res is the response object, not the request)
   console.log(req.params);

   if (!p_id) {
      return res.status(400).json({ error: "product ID is missing" });
   }

   // Execute the database query to fetch category data based on c_id
   db.query(q, p_id, (err, data) => {
     
      if (err) {
         return res.status(500).json({ error: "Error executing the query", details: err });
      }
      if (data.length === 0) {
         return res.status(404).json({ error: "product not found" });
      }
      // Return the fetched category data
      return res.json(data);
   });
});


app.get("/getoder/:order_no", (req, res) => {
   const order_no = req.params.order_no; // Get the c_id from request parameters
   const q = "SELECT product_name, quantity FROM tbl_addproduct WHERE order_no = ?";

   // Log the received request data (not res.data, as res is the response object, not the request)
   console.log(req.params);

   if (!order_no) {
      return res.status(400).json({ error: "product ID is missing" });
   }

   // Execute the database query to fetch category data based on c_id
   db.query(q, order_no, (err, data) => {
     
      if (err) {
         return res.status(500).json({ error: "Error executing the query", details: err });
      }
      if (data.length === 0) {
         return res.status(404).json({ error: "product not found" });
      }
      // Return the fetched category data
      return res.json(data);
   });
});



app.get("/getcategory/:c_id", (req, res) => {
   const c_id = req.params.c_id; // Get the c_id from request parameters
   const q = "SELECT category, description FROM tbl_addcategory WHERE c_id = ?";

   // Log the received request data (not res.data, as res is the response object, not the request)
   console.log(req.params);

   if (!c_id) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   // Execute the database query to fetch category data based on c_id
   db.query(q, c_id, (err, data) => {
     
      if (err) {
         return res.status(500).json({ error: "Error executing the query", details: err });
      }
      if (data.length === 0) {
         return res.status(404).json({ error: "Category not found" });
      }
      // Return the fetched category data
      return res.json(data);
   });
});

app.put("/addproduct_put/:p_id", (req, res) => {
  
   const product_id = req.params.p_id; // Accessing product ID from params

   // Check if product ID exists
   if (!product_id) {
      return res.status(400).json({ error: "Product ID is missing" });
   }

   const { p_name, price, description, img_name, sub_category, category } = req.body; // Assuming product details are sent in the request body

   const q = "UPDATE tbl_addproduct SET p_name = ?, price = ?, description = ?, img_name = ?, sub_category = ?, category = ? WHERE p_id = ?";

   db.query(q, [p_name, price, description, img_name, sub_category, category, product_id], (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the update query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Product not found" });
      }
      return res.json({ message: "Product updated successfully" });
   });
});

app.put("/order_put/:order_no", (req, res) => {
  
   const order_no = req.params.order_no; // Accessing product ID from params

   // Check if product ID exists
   if (!order_no) {
      return res.status(400).json({ error: "Product ID is missing" });
   }

   const { quantity } = req.body; // Assuming product details are sent in the request body

   const q = "UPDATE tbl_oederdetails SET  quantity = ? WHERE order_no = ?";

   db.query(q, [ quantity, order_no], (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the update query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Product not found" });
      }
      return res.json({ message: "Product updated successfully" });
   });
});


// delete method for deleting for postman

// delete method for deleting for postman
app.delete("/Delete_category/:c_id", (req, res) => {
   const categoryId = req.params.c_id; // Accessing category ID from params

   // Check if category ID exists
   if (!categoryId) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   const q = "DELETE FROM tbl_addcategory WHERE c_id = ?";

   db.query(q, categoryId, (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the delete query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Category not found" });
      }
      return res.json({ message: "Category deleted successfully" });
   });
});

app.delete("/Delete_order/:order_no", (req, res) => {
   const order_no = req.params.order_no; // Accessing category ID from params

   // Check if category ID exists
   if (!order_no) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   const q = "DELETE FROM tbl_oederdetails WHERE order_no = ?";

   db.query(q, order_no, (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the delete query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Category not found" });
      }
      return res.json({ message: "Category deleted successfully" });
   });
});

app.delete("/Delete_product/:p_id", (req, res) => {
   const productId = req.params.p_id; // Accessing category ID from params

   // Check if category ID exists
   if (!productId) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   const q = "DELETE FROM tbl_addproduct WHERE p_id = ?";

   db.query(q, productId, (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the delete query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Category not found" });
      }
      return res.json({ message: "Category deleted successfully" });
   });
});


// delete method for deleting for postman
app.delete("/Delete_Feedback/:c_id", (req, res) => {
   const FeedbackId = req.params.c_id; // Accessing category ID from params

   // Check if category ID exists
   if (!FeedbackId) {
      return res.status(400).json({ error: "Feedback ID is missing" });
   }

   const q = "DELETE FROM tbl_addcategory WHERE c_id = ?";

   db.query(q, FeedbackId, (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the delete query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Feedback not found" });
      }
      return res.json({ message: "Feedback deleted successfully" });
   });
});


// delete method for deleting for postman



  // post method to sned data into db
app.post('/Add_Category', (req, res) => {
   const q = "INSERT INTO tbl_addcategory( category, description) VALUES ( ?,?)";
   const values = [
    
     req.body.category,
     req.body.description
   ];

   db.query(q, values, (err, data) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Category inserted successfully' });
   });
});

app.post('/add_product', (req, res) => {
   const q = "INSERT INTO tbl_addproduct(p_name, price, description, img_name, sub_category, category) VALUES (?, ?, ?, ?, ?, ?)";
   const values = [
     req.body.p_name,
     req.body.price,
     req.body.description,
     req.body.img_name,
      req.body.sub_category,
      req.body.category
   ];

   db.query(q, values, (err, result) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Product Added successfully' });
   });
});

//add register
app.post('/register',(req,res)=>{
   const  q="insert into tbl_register(name,email,mob_no,password,con_password)values(?,?,?,?,?)";
   const values=[
  req.body.name,
   req.body.email,
   req.body.mob_no,
   req.body.password,
   req.body.con_password]
  
   db.query(q,values,(err,result)=>{
       if(err) {
          return res.status(500).json({err:'Error executing query',details:err})
      }
       return res.status(201).json("data inserted successfully")
   
      });
});
  // post method to sned data into db
  app.post('/add_feedback', (req, res) => {
   const q = "INSERT INTO tbl_feedback( name,mob_no,description) VALUES (?,?,?)";
   const values = [
    
     req.body.name,
     req.body.mob_no,
     req.body.description
    
   ];

   db.query(q, values, (err, result) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Data inserted successfully' });
   });
});
app.post('/add_order', (req, res) => {
   const q = "INSERT INTO tbl_oederdetails (order_no,product_name,quantity,price,total) VALUES (?,?,?,?,?)";
   const values = [

    req.body.order_no,
    req.body.product_name,
    req.body.quantity,
    req.body.price,
    req.body.total
    
   ];

   db.query(q, values, (err, result) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Data inserted successfully' });
   });
});
app.post('/add_orderdetails', (req, res) => {
   const q = "INSERT INTO tbl_order (order_no,table_no,date,sub_total,discount,final_ammount) VALUES (?,?,?,?,?,?)";
   const values = [

    req.body.order_no,
    req.body.table_no,
    req.body.date,
    req.body.sub_total,
    req.body.discount,
    req.body.final_ammount
    
   ];

   db.query(q, values, (err, result) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Data inserted successfully' });
   });
});
app.post('/add_payments/:order_no', (req, res) => {
   const orderId = req.params.order_no;
   const q = "INSERT INTO tbl_payment (card_no, card_name, total_ammount, ex_date, cvv, status, o_no) VALUES (?, ?, ?, ?, ?, 'Paid', ?)";
   const values = [
      req.body.card_no,
      req.body.card_name,
      req.body.total_ammount,
      req.body.ex_date,
      req.body.cvv,
      orderId // Use orderId as a value, not directly in the query string
   ];

   db.query(q, values, (err, result) => {
      if (err) {
         return res.status(500).json({ error: 'Error executing the query', details: err });
      }
      // Optionally, you can return the newly inserted row's ID or any other relevant information from the 'result' object.
      return res.status(201).json({ message: 'Data inserted successfully' });
   });
});



app.put("/UP_Category/:c_id", (req, res) => {
   const categoryId = req.params.c_id; // Accessing category ID from params

   // Check if category ID exists
   if (!categoryId) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   const { category, description } = req.body; // Assuming category and description are sent in the request body

   // Check if category and description are provided
   if (!category || !description) {
      return res.status(400).json({ error: "Category and description are required" });
   }

   const q = "UPDATE tbl_addcategory SET category = ?, description = ? WHERE c_id = ?";

   db.query(q, [category, description, categoryId], (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the update query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Category not found" });
      }
      return res.json({ message: "Category updated successfully" });
   });
});






app.put("/UP_product/:p_id", (req, res) => {
   const productId = req.params.p_id; // Accessing product ID from params

   // Check if product ID exists
   if (!productId) {
      return res.status(400).json({ error: "Product ID is missing" });
   }

   const { p_name, price, description, img_name, sub_category, category } = req.body;

   

   const q = "UPDATE tbl_addproduct SET p_name = ?, price = ?, description = ?, img_name = ?, sub_category = ?, category = ? WHERE p_id = ?";


   db.query(q, [p_name, price, description, img_name, sub_category, category, productId], (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the update query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "Product not found" });
      }
      return res.json({ message: "Product updated successfully" });
   });
});
app.put("/UP_Order/:order_no", (req, res) => {
   const orderId = req.params.order_no; // Accessing category ID from params

   // Check if category ID exists
   if (!orderId) {
      return res.status(400).json({ error: "Category ID is missing" });
   }

   const {product_name,quantity,price } = req.body; // Assuming category and description are sent in the request body

   // Check if category and description are provided
   if (!product_name|| !quantity||!price) {
      return res.status(400).json({ error: "Category and description are required" });
   }

   const q = "UPDATE tbl_oederdetails SET product_name = ?, quantity = ? ,price=? WHERE order_no= ?";

   db.query(q, [product_name,quantity,price, orderId], (err, data) => {
      if (err) {
         return res.status(500).json({ error: "Error executing the update query", details: err });
      }
      if (data.affectedRows === 0) {
         return res.status(404).json({ error: "order not found" });
      }
      return res.json({ message: "order updated successfully" });
   });
});


 app.listen(3000,()=>{
    console.log("connect to backend")
 });