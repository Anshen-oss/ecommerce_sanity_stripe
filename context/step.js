/**
 *  Nous commençons à implémenter une vraie logique je parle d'ajouter des articles
 * au panier en les achetant tout de suite en changeant les quantités en mettant à
 * jour le nombre d'articles dans le panier et en affichant également le composant
 * Cart; tout cela arrive parce que nous allons implémenter le contexte de React,
 * une source unique de données pour l'ensemble de notre application afin de gérer
 * le state de React en utilisant le contexte de react.
 */

/** 1. CREATE a new file StateContext.js */
// Here, we manage the entire state of the application

/** 2. IMPORT */
//  import { toast } from 'react-hot-toast';
// this is going to be that little pop-up notification that's going to appear
// whenever we add something to the cart remove it or finish the order

import React, { createContext, useContext, useState , useEffect } from 'react';
import { toast } from 'react-hot-toast';

// hook createContext()
const Context = createContext();

/**  3. CREATE THE FUNCTION COMPONENT */
import React, { createContext, useContext, useState , useEffect } from 'react';
import { toast } from 'react-hot-toast';

// Hook
const Context = createContext();

export const StateContext = ({ children }) => {

}

/** 4. CREATION OF THE DIFFERENT STATES */
// what are we going to have in our context well first
// of all there's going to be a lot of different states


/** 4. CREATION OF THE FIRST STATE : SHOW_CART*/
// showCart is set to false
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)

}


/** 5. CREATION OF THE SECOND STATE CART_ITEM */
// we always need to know what items do we have in our cart and at the start we're
// going to leave it empty because soon enough we're going to fill it with the
// data coming from local storage so if a user exits the page and comes back all
// of his data will remain in exactly the state it was before they left
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItem, setCartItem] = useState()
}


/** 6. CREATION OF THE THIRD STATE :TOTAL_PRICE */
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState()
}

/** 7. CREATION OF THE FOURTH STATE :TOTAL QUANTITIES */
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
}

/** 8. CREATION OF THE FITH STATE :TQTY = QUANTITIES */
// qty set to 1 at the start
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1)
}

/** 9. CREATION OF THE CONTEXT PROVIDER */

// we can create our context provider by specifying a return statement :
// <Context.Provider></Context.Provider>
// https://fr.reactjs.org/docs/context.html#reactcreatecontext

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1)

  return (
    <Context.Provider></Context.Provider>
  )
}


/**
 * 10. PASS THE CHILDREN INSIDE THE PROVIDER
 *
 * This means is that we're essentially not rendering anything we're just gonna
 * wrap everything with our context provider and a really important thing is that
 * we're gonna pass some values o it so we can say value and then that's going to be an object of
 * values that we want to pass across our entire application
*/

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1)

  return (
    <Context.Provider
      values={{

      }}
    >
      {children}
    </Context.Provider>
  )
}


/**
 * 11. PASS IN VALUES OBJECT ALL OUR STATES
 *
 * We'll be able to access all of these values right away from absolutely any single one of our components
*/
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1)

  return (
    <Context.Provider
      values={{
        showCart,
        cartItems,
        totalPrices,
        totalQuantities,
        qty
      }}
    >
      {children}
    </Context.Provider>
  )
}


/**
 * 12. IMPORT STATE CONTEXT INE THE _APP.JS FILE
 *
 * 1.. Open the pages/_app.js file
 * 2. Import StateContext from context/StateContext.js
 *
*/
import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

/**
 * 14. CALL SATE CONTEXT AS A FUNCTION
 *
 * 1. Wrap our entire layout and our component with the state context. this means
 * that nothing is going to change we simply want to pass the data from the state
 * context to every single component inside of it
*/

import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
       <Layout>
        <Component {...pageProps} />
        </Layout>
    </StateContext>

  )
}

export default MyApp;


/**
 * 15. OP UP NOTIFIACATION
 * We need to make our small notification pop up
 * Import Toaster in _app.js:
 * import { Toaster } from 'react-hot-toast';
 *
 * Put the component <Toaster /> inside the Layout component after
 */
import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
       <Layout>
         <Toaster />
         <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp;


/**
 * 16. IMPLEMENTATION OF ALL FUNCTIONALITIES FOR PRODUCT DETAILS
 *
 * Implementation of incrementing the quantities, adding the items to the cart
 *
 * Instead of simply passing the setQty function to all of our components let's
 * create our dynamic quantity update functions right here inside of our state
 * context that way we can provide just the final function to our product details component
 *
 * 1. Create a new function incQty as an increased quantity  and inside of there
 * we're simply going to create a callback function we're going to call the setQty state.
 *
 * Nous voulons avoir une fonction de rappel parce que chaque fois que vous mettez
 * à jour le state en utilisant la version précédente de ce même état, donc la
 * quantité précédente, nous devons utiliser une fonction de rappel
 *
*/

//...
export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1 )
  }

  //...
}


/**
 * 17. DECREMENT NUMBER OF ITEMS IN THE CART
 */
 // ...
  const decQty = () => {
    setQty((prevQty) => {
    if(prevQty -1 < 1) return 1;
  }
  }
 // ...


/**
 * PASS THE TWO FUNCTIONS TO OUR GLOBAL STATES
 */
// ...
  return (
    <Context.Provider
      values={{
        showCart,
        cartItems,
        totalPrices,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  )
}
//...

/**
 * 18. GO TO PAGES/PRODUCT/[SLUG].JS FILE
 *
 * We'are going for the first time that global state se just created and its functions
 *
 * 1. Import useStateContext
 * import { useStateContext } from '../../context/StateContext';
 *
 * In StateContext.js don'forget to export useStateContext like that:
 * export const useStateContext = () => useContext(Context);
 *
 * @url https://www.w3schools.com/react/react_usecontext.asp
 * @url https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7256029-partagez-vos-donnees-avec-le-contexte-et-usecontext
 */
//...
  return (
    <Context.Provider
      values={{
        showCart,
        cartItems,
        totalPrices,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);

// that simply returns the use context and then we provide our own context.
// that is going to allow us to use our state essentially just like a hook



/**
 * DESTRUCTURATION IN [SLUG].js
 *
 * We can now destructure the props of StateContext in [slug].js
 *
 * const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
*/


/** USE THE FUNCTION OF THE DESTRUCTURATION ABOVE IN OUR CODE */
<div className="quantity">
  <h3>Quantity</h3>
  <p className="quantity-desc">
    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
    <span className="num">{qty}</span>
    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
  </p>
</div>
// ...


//*********************** ADD ITEMS TO CART STATECONTEXT.JS *******************/

/**
 * 1. in StateContext.js create a onAdd a function
 *
 * @function onAdd()
 * @params{string} product
 * @param {number} quantity
 *
 * 1. Check if the product that we want to add is already in the cart
 * */
const onAdd = (product, quantity) => {
    const CheckProductInCart = cartItems.find()
}

/** 2. Then, Loop over all the cart items
 * and check if item._id === product._id
*/
const onAdd = (product, quantity) => {
  const checkProductInCart = cartItems.find((item) => item_id === product._id);
}

/**
 * 3. we need to know is the item we're trying to add to cart is already in the cart
 * because if that is the case then we simply need to increase the quantity and
 * not add another instance of the same item .
 * So we can say:
 */
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item_id === product._id);

    if(checkProductInCart) {
      setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity))
    }
  }


  /**
   * SET THE TOTAL QUANTITY
   *
   * We also need to set the total quantities which is another state that we have:
   *  setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + product.quantity);
   * */
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item_id === product._id);

    if(checkProductInCart) {
      setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity));
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

      const updatedCartItems = cartItems.map((cartProduct) => {
        if(carProduct._id === product._id ) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,

        }
      })
    }
  }

 /**
  * Prenons les cas où nous avons 1 headphones dans le panier (cart):
  * http://localhost:3000/product/rs-pro-headphones
  * SI je rettourne à la page d'accueil et que je veux ajouter une autre paire du
  * même casque. Si j'ajoute une autre paire et clique sur le bouton "Add to cart"
  *
  * Nous ne voulons pas ajouter une autre paire de casque; nous voulons
  * reconnaître le fait que nous avons déjà le même article et que nous voulons
  * simplement augmenter la quantité ici et nous voulons incrémenter le sous-total.
  *
  * We're going to implement the functionality to add a different item to the cart
  *
  * With that in mind we now have our updated cart items and the only thing we
  * have to do is set cart items to be updated card items :
  *       setCartItems(updatedCartItems);

  *
  * And we can even show the toast dot success so that's that little success message
  *       toast.success(`${qty} ${product.name} added to the cart`);
  *
  * */
 const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item_id === product._id);

    if(checkProductInCart) {
      setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity));
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id ) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })

      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart`);
    }
  }


  /** WHAT IF THE ITEM DOESN'T ALREADY EXIST IN THE CAR -
   * QUE FAIRE SI L'ARTICLE N'EXISTE PAS DÉJÀ DANS le PANIER
   *
   * In that case we can go inside of an else statement
   * And we would also have to update the quantity
   *
   * */
 const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item_id === product._id);

    setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id ) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })

      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart`);
    } else {
      product.quantity = quantity;
    }
  }


  /**
   *
   * finally we need to set card items but this time we're going to set card
   * items to be an empty array where we spread all of the existing card items
   *     setCartItems([...cartItems]);
   *
   * And then we add an object where we spread our new product right here
   *     setCartItems([...cartItems, {...product}]);
   *
   * so a product with the updated quantity that is it and then again we can
   * render out this toast success
   */

   const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item_id === product._id);

    setTotalPrice((prevTotalPrice => prevTotalPrice + product.price * quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === product._id ) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })

      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart`);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
      toast.success(`${qty} ${product.name} added to the cart`);
  }

/**
 * ADD THE ITEM TO THE CART
 *
 * With that we should be able to add the items to the cart
 * */

 return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  )


  // we can pull onAdd function from our use state context right here [slug].js
  const ProductDetails = ({ product, products }) => {
  // Destructure values from product
  const { image, name, details, price} = product;
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd } = useStateContext();
  //...
  }


  // and finally we can use it inside of our add to cart button in [slug].js
  // but we need to provide the current product as the parameter as well as
  // the quantity that we want to add
  <div className="buttons">
    <button type="button" className="add-to-cart" onClick={() =>onAdd(product, qty) }>Add to cart</button>
    <button type="button" className="buy-now" onClick="">Buy Now</button>
  </div>



/*** IMPLEMENT THE CART COMPONENT */
