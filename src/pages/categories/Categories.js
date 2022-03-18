import { Card, Sidebar } from "components"
import './categories.css'

export const Categories = () => {
    return(
        <>
        <main className="container">
        <Sidebar />
        <div className="main-content">
        <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
          <Card
            img={"./images/homepage/webdev.png"}
            productName={"The complete 2022 Fullstack Web Developer Course"}
            productOwner={"Arjun"}
            noOfRatings={4352}
            price={199}
          />
        </div>
        </main>
        
        </>
    )
}