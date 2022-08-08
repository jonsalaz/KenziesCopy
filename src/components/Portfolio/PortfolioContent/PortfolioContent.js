import { Grid, Stack } from "@mui/material";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import beauty from "./specs/beauty.png";
import aperture from "./specs/aperture.png";
import heiwa from "./specs/heiwa.png";

function PortfolioContent() {
    return (
        <Grid
            margin="25px"
            container
            columns={3}
            justifyContent="space-evenly"
            alignItems="stretch"
            width="100%"
        >
            <PortfolioItem
                title="SPEC Rare Beauty Email Ad"
                image={beauty}
                goal="This spec email ad was designed assist Rare Beauty in meeting their goal of raising $10 million to support mental health awareness/provide resources—and, of course, to attract consumers who appreciate the brand’s commitment to mental health."
                challenge="Even  when the prize is as exciting as Makeup for Life, we tend to keep our money close to our chest. How do we encourage people to donate when the only benefit in doing so is that they *might* win a prize and that they’ll…feel good?"
                solution="Reminding the audience that their donations could save lives and support people in their journeys of self-acceptance was treated as the foremost benefit—the potential to win Rare Beauty Makeup For Life was only the cherry on top (but it’s a big, juicy, cherry, isn’t it?). "
                summary="This ad would go out to those who had chosen to opt in to receiving emails from Rare Beauty; the audience already had a positive relationship with the brand, would be intrigued by the idea of winning a lifetime supply, and are already appreciative of Rare Beauty’s commitment to making mental health resources accessible; the ad, then, speaks directly to their interests and morals."
            />

            <PortfolioItem
                title="SPEC Aperture Photography Print Ad"
                image={aperture}
                summary="And in terms of convincing the reader of the importance of buying senior photos, it was important to remember the audience: parents. Parents, who want to remember every moment—and if they can get quality photos of their baby to memorialize their milestone at an unbeatable price, they will. The ad invokes this desire: “Fondest milestones,” “It’ll Last Longer,” etc."
                goal="Aperture Photography (fictitious), is hoping to grow their clientele by offering discounted rates to graduating seniors with the promise of high-quality, professional photos."
                challenge="There are lots of photographers in town to choose from—how do we communicate that Aperture Photography is a cut above the rest? And furthermore—how do we convince people that getting senior photos at all is a worthwhile expense?"
                solution="In addition to the discounts being highly competitive, the promise of quality was iterated in both the images associated with the copy and in the copy itself; “premium quality,” “Classic,” “Effortless,” “Timeless”—these words paint a picture and indicate a unique brand voice, differentiating Aperture from its competitors."
            />
            <PortfolioItem
                title="SPEC Heiwa Web Design Email/Print Ad"
                image={heiwa}
                summary="Further, Heiwa Web Design promises expertise—design expertise that the reader might not have, which gives the reader another reason to work with a web design firm rather than designing their website themselves."
                goal="Heiwa Web Design Solutions is a new (fictitious) Web Design Firm hoping to build their clientele. They are starting from scratch; they need this launch, and this 60% off deal, to pay off."
                challenge="Anyone can design their own website—and you can do it with relative ease, for free, using builders like Wix and Squarespace. How do you convince someone to buy in to the convenience of hiring out a web designer when they can do the work themselves at a lower cost?"
                solution="The target audience here is business owners—and business owners don’t have time to sit down and build a website. Or maybe they do have the time, but they could be spending it more wisely and using it to grow their business. The “ease” factor was capitalized on in the ad; Heiwa focuses on the website so you can focus on your business."
            />
        </Grid>
    );
}

export default PortfolioContent;
