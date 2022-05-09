//********* 👋≧◉ᴥ◉≦👋≧◉ᴥ◉≦  FIX 👋≧◉ᴥ◉≦👋≧◉ᴥ◉≦ *** //////

ᕙ(`▿´)ᕗ Failed to compile ᕙ(`▿´)ᕗ

./pages/_app.js:4:9
Syntax error: Support for the experimental syntax 'jsx' isn't currently enabled (4:10):

  2 |
  3 | function MyApp({ Component, pageProps }) {
> 4 |   return <Component {...pageProps} />
    |          ^
  5 | }
  6 |
  7 | export default MyApp

Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.

1. Create a .babelrc file in the root directory of your Application
2; Add:
{
  "preset": ["next/babel",
  "@babel/preset-react"]
}

3. install:
npm install --save-dev @babel/preset-react

4. Go to package.json file to verify the installation of

5. in pages/_app.js at the top of the file, add:
import React from 'react';
...


6. in .eslintrc.json file, add :

{

  "extends": ["next/babel", "next/core-web-vitals"]
}

//******************************  ERROR && FIX ************************************/

Server Error
Error: getStaticPaths is required for dynamic SSG pages and is missing for '/product/[slug]'.
Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value

This error happened while generating the page. Any console logs will be displayed in the terminal window.

* When we use get static props we also need to add one extra special next.js function called get
* getStaticPaths .

* si une page a des itinéraires dynamiques et utilise des props statiques, elle
* doit définir une liste de paths à générer statiquement, pensez-y si nous sommes
* sur notre localhost 3000 ici, nous devons déjà savoir que l'utilisateur peut
* cliquer sur n'importe quel produit de la liste pour obtenir les détails.
* Pour que notre page soit incroyablement optimisée, Next.js doit immédiatement
* savoir que toutes ces pages peuvent être cliquées, puis il va nous montrer
* immédiatement les données, mais maintenant, puisque nous allons avoir plusieurs
* autres liens dans la page de détails du produit comme la possibilité de visiter
* des produits supplémentaires que nous pourrions aimer, nous devons également
* répéter le processus pour eux afin que Next.js puisse préparer toutes ces données
* et les livrer le plus rapidement possible afin de résoudre ce problème


/** To fix this :*/

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  }
}



//******* ( ͡👁️ ͜ʖ ͡👁️)✊ IMPLEMENTATION OF THE CART : CREATION OF THE FUNCTION TO ADD ITEM TO THE CART ( ͡👁️ ͜ʖ ͡👁️)✊ *******

1. open Navbar.jsx file
2. Import
import { Cart } from './Cart';

3. Render the component <Cart /> under the button
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ANHS Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick=""
        >
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>

      <Cart />
    </div>
  )
}

* but our cart shouldn't always be visible it's only visible when it is clicked
* So we have to somehow keep track of that global state and if you think about it
* we are already doing that we have this,  showCart et setShowCart in
* StateContext.js file:
 const [showCart, setShowCart] = useState(false);

 4. ( ͡👁️ ͜ʖ ͡👁️) In this file, pass setShowCart to values:

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  )

5. Then we can pull these values from our Navbar component

6. In Navbar.jsx file, import
import { useStateContext } from '../context/StateContext';

7. ( ͡👁️ ͜ʖ ͡👁️) Now, we can recuperate the props's values from StateContext.js like that:
  const { showCart, setShowCart, totalQuantities } = useStateContext();


✍ ✍ ✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍✍
* The totalQuantities is going to be the number of all items in the cart so
* however many items we have we need to know what is that number before that was
* hard coded

8. ( ͡👁️ ͜ʖ ͡👁️) NOw, we can pass totalQuantities as a dynamic value : <span className="cart-item-qty">{totalQuantities}</span>

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ANHS Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick=""
        >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span> ✔
      </button>

      <Cart />
    </div>
  )
}


9. ( ͡👁️ ͜ʖ ͡👁️) We're going to also make this button close and open the cart on demand:
  <button
    type="button"
    className="cart-icon"
    onClick=""
    >
    <AiOutlineShopping />
    <span className="cart-item-qty">{totalQuantities}</span> ✔
  </button>

10. ( ͡👁️ ͜ʖ ͡👁️) Create a callback function in the button:

11.  set show cart to be ttrue :onClick={() => setShowCart(true)}

<button
  type="button"
  className="cart-icon"
  onClick={() => setShowCart(true)}
  >
  <AiOutlineShopping />
  <span className="cart-item-qty">{totalQuantities}</span>
</button>

12.  ( ͡👁️ ͜ʖ ͡👁️) we only want to show the cart when the show cart is set to true
Navbar.js
 return (
   ...
 {showCart && <Cart />}
...)















////****************************REPRENDRE ICI

https://www.youtube.com/watch?v=4mOkFXyxfsU

1h36mn
2h00 le 02/05/2022
