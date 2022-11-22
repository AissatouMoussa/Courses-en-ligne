import React  from "react"
import { List } from "../components/Navbar"

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Fruits", "Légumes", "Produits frais", "Epicerie", "Boissons"]
  
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {links.map((link, index) => {
            return (<li className={category === index && 'active'} 
                        key={index} onClick={() => loadCategory(index)}>{link}</li>)
          })}
        </ul>
      </div>
    );
  };

export const Home = props => {
    const {isFiltering, filtered, list, category, ajouterAuPanier, count, loadCategory}= props
    return (<div className="containre">
    <div className="row">
      <SideMenu loadCategory={loadCategory} category={category} />
      <div className="col-sm">
        <div className="row">
          <List data={isFiltering ? filtered : list[category]}
            category={category} ajouterAuPanier={ajouterAuPanier} count={count} />
        </div>
      </div>
    </div>
  </div>)
}