import React, { Component } from 'react';
import { normalizeItem } from '../../utils/parser';

import './Branding.css';

const item = {
  "owner": "ShareAmerica",
  "thumbnail": {
      "small": {
          "orientation": "landscape",
          "width": 356,
          "url": "https://cdp-video-tst.s3.amazonaws.com/2018/01/share.dev.america.gov_531295/7a62820be081d67b36919fc528c58db3.jpg",
          "height": 220,
          "md5": "7a62820be081d67b36919fc528c58db3"
      },
      "large": {
          "orientation": "landscape",
          "width": 1800,
          "url": "https://cdp-video-tst.s3.amazonaws.com/2018/01/share.dev.america.gov_531295/6eb2464463c364e547c5dfec56f1e635.jpg",
          "height": 1170,
          "md5": "6eb2464463c364e547c5dfec56f1e635"
      },
      "medium": {
          "orientation": "landscape",
          "width": 768,
          "url": "https://cdp-video-tst.s3.amazonaws.com/2018/01/share.dev.america.gov_531295/ab0fcbc1b96ecf6761bb61fc14482807.jpg",
          "height": 499,
          "md5": "ab0fcbc1b96ecf6761bb61fc14482807"
      },
      "full": {
          "orientation": "landscape",
          "width": 1800,
          "url": "https://cdp-video-tst.s3.amazonaws.com/2018/01/share.dev.america.gov_531295/6eb2464463c364e547c5dfec56f1e635.jpg",
          "height": 1170,
          "md5": "6eb2464463c364e547c5dfec56f1e635"
      }
  },
  "languages": [
      {
          "post_id": 535127,
          "language": {
              "language_code": "ar",
              "text_direction": "rtl",
              "display_name": "Arabic",
              "locale": "ar",
              "native_name": "العربية"
          }
      },
      {
          "post_id": 535064,
          "language": {
              "language_code": "es",
              "text_direction": "ltr",
              "display_name": "Spanish",
              "locale": "es-es",
              "native_name": "Español"
          }
      },
      {
          "post_id": 535001,
          "language": {
              "language_code": "fr",
              "text_direction": "ltr",
              "display_name": "French",
              "locale": "fr-fr",
              "native_name": "Français"
          }
      },
      {
          "post_id": 535018,
          "language": {
              "language_code": "pt-br",
              "text_direction": "ltr",
              "display_name": "Portuguese (Brazil)",
              "locale": "pt-br",
              "native_name": "Português"
          }
      },
      {
          "post_id": 535669,
          "language": {
              "language_code": "ru",
              "text_direction": "ltr",
              "display_name": "Russian",
              "locale": "ru-ru",
              "native_name": "Русский"
          }
      },
      {
          "post_id": 536202,
          "language": {
              "language_code": "ur",
              "text_direction": "rtl",
              "display_name": "Urdu",
              "locale": "ur",
              "native_name": "اردو"
          }
      },
      {
          "post_id": 534995,
          "language": {
              "language_code": "zh-hans",
              "text_direction": "ltr",
              "display_name": "Chinese (Simplified)",
              "locale": "zh-cn",
              "native_name": "简体中文"
          }
      }
  ],
  "author": {
      "name": "Mark Trainer",
      "id": 56
  },
  "link": "http://share.dev.america.gov/where-isis-is-defeated-religious-freedom-thrives/",
  "language": {
      "language_code": "en",
      "text_direction": "ltr",
      "display_name": "English",
      "locale": "en-us",
      "native_name": "English"
  },
  "published": "2018-01-17T00:03:22+00:00",
  "type": "post",
  "title": "Where ISIS is defeated, freedom of worship returns",
  "content": "<p>2017 was a momentous year. Americans celebrated the inauguration of the 45th president, Donald Trump, and gazed skyward at an awe-inspiring solar eclipse as well as the rising of a &#8220;supermoon.&#8221; They responded with kindness and determination to help those who lost homes in Hurricane Harvey, the California wildfires and other natural disasters. They cheered the first American woman in 40 years to take home laurels in the New York City Marathon, gasped at the winning bid for a rediscovered Leonardo Da Vinci painting, and helped the Cincinnati Zoo&#8217;s premature baby hippo become a social media star.</p>\n<h3><strong>Inauguration (above)</strong></h3>\n<p>Every president since the first, George Washington, has taken the same, 35-word oath of office, as prescribed by the U.S. Constitution: “I do solemnly swear that I will faithfully execute the office of president of the United States, and will, to the best of my ability, preserve, protect and defend the Constitution of the United States.” In a ceremony on the flag-draped West Front of the U.S. Capitol, Donald J. Trump <a title=\"Here's newly sworn-in President Trump's full speech | ShareAmerica\" href=\"http://share.dev.america.gov/heres-president-trumps-full-speech/\">took the oath</a> at noon on January 20.</p>\n<h3><strong>Total eclipse of the sun</strong></h3>\n<figure id=\"attachment_527791\" style=\"max-width: 2048px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/eclipse-4-up.jpg\"><img class=\"wp-image-527791 size-full\" title=\"Four photos of people looking up while wearing special eyeglasses (© Brendan Smialowski/Getty; © Derek Davis/Portland Press Herald/Getty; © Peter Foley/Bloomberg/Getty; © Stephen Hudak/Orlando Sentinel/TNS/Getty)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/eclipse-4-up.jpg\" alt=\"Four photos of people looking up while wearing special eyeglasses (© Brendan Smialowski/Getty; © Derek Davis/Portland Press Herald/Getty; © Peter Foley/Bloomberg/Getty; © Stephen Hudak/Orlando Sentinel/TNS/Getty)\" width=\"2048\" height=\"1588\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-300x233.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-768x596.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-1024x794.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-696x540.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-1068x828.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/eclipse-4-up-542x420.jpg 542w\" sizes=\"(max-width: 2048px) 100vw, 2048px\" /></a><figcaption class=\"wp-caption-text\">Clockwise from top left: Washington (© Brendan Smialowski/Getty); Ware, New Hampshire (© Derek Davis/Portland Press Herald/Getty); New York City (© Peter Foley/Bloomberg/Getty); and Sorrento, Florida (© Stephen Hudak/Orlando Sentinel/TNS/Getty)</figcaption></figure>\n<p>For sky watchers, nothing beats a <a title=\"Americans are in a frenzy over total solar eclipse | ShareAmerica\" href=\"http://share.dev.america.gov/americans-are-in-frenzy-over-total-solar-eclipse/\">total solar eclipse</a>. They occur somewhere on the planet once or twice a year, but the path of “totality” is only 50 miles<ins> wide and some localities are &#8220;eclipsed&#8221; only once a century</ins>. That’s why millions of Americans got excited about the eclipse that swept across the continent from Oregon to South Carolina on August 21, affording <ins>a</ins> glimpse in the daytime darkness <ins>of</ins> the sun’s<ins> fiery</ins> corona, a crown of light surrounding the shadowed moon. It only lasted a few minutes, but Americans won’t have to wait long for the next: April 2024.</p>\n<h3><strong>Supermoon on the horizon</strong></h3>\n<figure id=\"attachment_527530\" style=\"max-width: 900px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-885621730.jpg\"><img class=\"wp-image-527530\" title=\"Bushes silhouetted by light from moon (© Xinhua/Li Ying via Getty Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-885621730.jpg\" alt=\"Bushes silhouetted by light from moon (© Xinhua/Li Ying via Getty Images)\" width=\"900\" height=\"818\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-300x273.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-768x698.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-1024x931.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-696x632.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-1068x970.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-885621730-462x420.jpg 462w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></a><figcaption class=\"wp-caption-text\">(© Xinhua/Li Ying via Getty Images)</figcaption></figure>\n<p>So-called &#8220;supermoons&#8221; occur far more often than eclipses, but they, too, are a beautiful sight that happens when the full moon rises as it orbits closest to Earth. It can appear to the naked eye up to 14 percent larger and 30 percent brighter than usual. This view was over Los Angeles on December 3. On average 14 lunar months elapse between supermoons. Some loom larger than others.</p>\n<h3><strong>An old master breaks records</strong></h3>\n<figure id=\"attachment_527259\" style=\"max-width: 5312px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17341068991508.jpg\"><img class=\"wp-image-527259 size-full\" title=\"Woman handling painting hanging on wall (© AP Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17341068991508.jpg\" alt=\"Woman handling painting hanging on wall (© AP Images)\" width=\"5312\" height=\"3460\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508.jpg 5312w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-300x195.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-768x500.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-1024x667.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-696x453.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-1068x696.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17341068991508-645x420.jpg 645w\" sizes=\"(max-width: 5312px) 100vw, 5312px\" /></a><figcaption class=\"wp-caption-text\">(© AP Images)</figcaption></figure>\n<p>Fewer than 20 paintings by Leonardo Da Vinci survive. The Italian Renaissance sculptor, inventor, architect and scientist painted <em>Mona Lisa</em> and <em>The Last Supper</em>. When his rediscovered <em>Salvator Mundi</em> appeared on the art market, it was inevitable that the old record — a Picasso sold in 2015 for $179 million — would fall. Still, no one expected the bidding at Christie’s Auction House in New York to reach the $450 million that an anonymous buyer will pay in three installments. The oil painting showing Jesus Christ with one hand uplifted and the other holding an orb will go on display at the Louvre Abu Dhabi art museum.</p>\n<h3><strong>Beating the odds</strong></h3>\n<figure id=\"attachment_527556\" style=\"max-width: 2048px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-647010494-1.jpg\"><img class=\"wp-image-527556 size-full\" title=\"Baby hippo in pool with handlers feeding it with bottle (© ZooBorns/Barcroft Images/Getty Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-647010494-1.jpg\" alt=\"Baby hippo in pool with handlers feeding it with bottle (© ZooBorns/Barcroft Images/Getty Images)\" width=\"2048\" height=\"1356\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-300x199.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-768x509.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-1024x678.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-696x461.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-1068x707.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-647010494-1-634x420.jpg 634w\" sizes=\"(max-width: 2048px) 100vw, 2048px\" /></a><figcaption class=\"wp-caption-text\">(© ZooBorns/Barcroft Images/Getty Images)</figcaption></figure>\n<p>Fiona the baby hippo was born six weeks premature at the Cincinnati Zoo and Botanical Garden in January, weighing just 13 kilograms, almost half the size of the smallest ever recorded. Bottle feeding and tender care soon helped Fiona gain weight. She topped 270 kilograms by year’s end and remained a star on social media as well as the zoo’s biggest draw.</p>\n<h3><strong>Taking home the laurels in New York City</strong></h3>\n<figure id=\"attachment_527130\" style=\"max-width: 900px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17309655355708.jpg\"><img class=\"wp-image-527130\" title=\"Female runner expressing emotion as she crosses finish line (© AP Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17309655355708.jpg\" alt=\"Female runner expressing emotion as she crosses finish line (© AP Images)\" width=\"900\" height=\"596\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-300x199.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-768x509.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-1024x678.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-696x461.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-1068x707.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17309655355708-634x420.jpg 634w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></a><figcaption class=\"wp-caption-text\">(© AP Images)</figcaption></figure>\n<p>Half a million people run in 1,100 U.S. marathons each year. None attracts more runners than the New York City Marathon, which starts in Staten Island and winds through all five boroughs before the 50,000 runners finish in Central Park after 26 miles and 385 yards, or 42.2 kilometers. There was extra jubilation for hometown fans on November 5, when Shalane Flanagan, 36, became the first American woman to win in 40 years. Flanagan took bronze in the 10-kilometer race at the 2008 Olympics and finished sixth in the marathon at the 2016 Olympics in Rio.</p>\n<h3><strong>Helping the homeless after Hurricane Harvey</strong></h3>\n<figure id=\"attachment_527117\" style=\"max-width: 900px\" class=\"wp-caption aligncenter\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17242729550154.jpg\"><img class=\"wp-image-527117\" title=\"Woman holding baby with moon and cityscape painted on wall behind her (© AP Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/AP_17242729550154.jpg\" alt=\"Woman holding baby with moon and cityscape painted on wall behind her (© AP Images)\" width=\"900\" height=\"764\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-300x255.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-768x652.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-1024x870.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-696x591.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-1068x907.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/AP_17242729550154-495x420.jpg 495w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></a><figcaption class=\"wp-caption-text\">(© AP Images)</figcaption></figure>\n<p>Hurricanes struck across the Caribbean and Gulf Coast states in a deadly four-week spate in late summer. After <a title=\"Hurricane Harvey in pictures | ShareAmerica\" href=\"http://share.dev.america.gov/hurricane-harvey-in-pictures/\">Hurricane Harvey</a> dumped 56 inches of rain on South Texas and flooded downtown Houston, the owner of Gallery Furniture opened the showroom&#8217;s doors and provided bedding for hundreds, including Gladys Dasi and her 2-month-old son, Elliott (above). In all the natural disasters of 2017, first responders and volunteers turned out in force to rescue people and help those affected by the storms.</p>\n<h3><strong>Battling the California wildfires</strong></h3>\n<figure id=\"attachment_527543\" style=\"max-width: 2048px\" class=\"wp-caption alignnone\"><a href=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-889364774.jpg\"><img class=\"wp-image-527543 size-full\" title=\"Firefighters looking into distance in orange glow of fire (© David McNew/Getty Images)\" src=\"https://share.edit.america.gov/wp-content/uploads/2017/12/GettyImages-889364774.jpg\" alt=\"Firefighters looking into distance in orange glow of fire (© David McNew/Getty Images)\" width=\"2048\" height=\"1365\" srcset=\"https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774.jpg 2048w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-300x200.jpg 300w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-768x512.jpg 768w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-1024x683.jpg 1024w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-696x464.jpg 696w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-1068x712.jpg 1068w, https://sharedevstatic.s3.amazonaws.com/uploads/2017/12/GettyImages-889364774-630x420.jpg 630w\" sizes=\"(max-width: 2048px) 100vw, 2048px\" /></a><figcaption class=\"wp-caption-text\">(© David McNew/Getty Images)</figcaption></figure>\n<p>Californians dwell close to the ocean and are surrounded by scenic forests and rugged mountains. Warmth, sun and beauty encourage outdoor recreation much of the year. But nature can turn on the 39 million residents suddenly, as it did this fall when Santa Ana winds fanned some of the largest wildfires in the state’s history. Thousands of firefighters, like these in Ojai, California, converged from all over the western United States to battle the blazes.</p>\n<p><em>ShareAmerica photo editor Sherry L. Brukbacher selected the photos for this article.</em></p>\n",
  "tags": [
      "cultural preservation",
      "freedom of religion",
      "isis",
      "source: department",
      "type: text",
      "isis"
  ],
  "site": "share.dev.america.gov",
  "post_id": 531295,
  "modified": "2018-01-23T16:34:54+00:00",
  "categories": [
      {
          "name": "countering violent extremism",
          "id": "j4riF2MBR4UFGCthJOBV"
      },
      {
          "name": "global issues",
          "id": "jIriF2MBR4UFGCthI-Dv"
      },
      {
          "name": "economic opportunity",
          "id": "WIriF2MBR4UFGCthHOCO"
      }
  ],
  "excerpt": "In July 2017, ISIS was driven from Mosul, in Iraq. Now there, and in places where ISIS has been defeated, there is a renewal of religious freedom.",
  "slug": "where-isis-is-defeated-religious-freedom-thrives"
}

const data = normalizeItem(item);
// console.log(data)

class Branding extends Component {
 render(){
    return (
      <div className="cdp-branding-container">
        <div className="cdp-branding-item" style={{textAlign: 'left', maxWidth: '200px'}}>
          <a href={ `https://${data.site}` }>
            <img src={ data.logo } alt={ data.owner } />
          </a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'center'}}>
          <a href={ data.link }>View Original</a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'right'}}>Brought to you by the CDP</div>
      </div>
    )
  }
};

export default Branding;
