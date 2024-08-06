import {
  collection, doc, getDoc, getDocs 
} from "firebase/firestore";

import { db } from "../config/firestore";

export const getAllProducts = async () => {
  const collectionRef = collection(db, "products");
  const snapshot = await getDocs(collectionRef);
  console.log(snapshot);
  const cleanData = snapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() }; 
});
console.log(cleanData);
return cleanData;
}
// Fetch all products
export const fetchProducts = async () => {
    const productsCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productsCollection);
    return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  //get the reference
  const docRef = doc(db, "products", id);
  //look up the document by reference
  const snapshot = await getDoc(docRef);
  // if a document with id doesn't exist throw an error

  if (!snapshot.exists()) {
    throw new Error("Could not find the product with id" + id);
  }

  //otherwise we get the document to grab the data
  return { id: snapshot.id, ...snapshot.data() };
  // data() doesn't return the id of the document
  // return snapshot.data() - THIS WILL STILL WORK
};

export const updateProductById = async (id, data) => {
  const docRef = doc(db, "products", id);
  //const cleanedProduct = cleanProductData(data);
  await updateDoc(docRef, cleanedProduct);
};