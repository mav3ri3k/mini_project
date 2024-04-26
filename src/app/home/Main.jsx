import Rules from "../components/CarRules.jsx";

export default function Main() {
  let contentOne =
    "Drinking and driving may look like fun but it is far more dangerous not just to self but for others too. Besides risking the lives of people on the road, co-passengers and self, being caught driving while inebriated can land you in big trouble with authorities.";
  let contentTwo =
    "According to the MV Act of 1981, driving without minimum coverage in the form of third-party liability cover can attract penalties. If your car is not insured or if your car insurance has expired and you are still driving the uninsured car, the traffic authority can fine you for Rs 2,000. If the same offense is committed again, a penalty of up to Rs 4,000 can be imposed.";
  let contentThree =
    "Don't call yourself a safe driver if you don't wear your seat belt around your chest and waist habitually. Driving a car with a seat belt not only ensures your safety but is also mandatory under the law. If you are caught breaking this car traffic rule, you could face a fine of up to Rs 1,000.";
  let contentFour =
    "Using a cell phone while operating the steering wheel can cause distraction and lead to an accident. According to the new MV rules that came into effect on 1 October 2020, the driver can use his or her mobile phone only as a navigational device. If you are caught talking on the phone or for any purpose other than navigation, you will be fined for an amount up to Rs 5,000. Using a phone while driving can attract imprisonment for a year.";
  let contentFive =
    "Have you ever noticed a highway speedometer? If yes, you may have also noticed the red display indicating that you exceeded the speed limit. Over-speeding your car can result in a fine of Rs 1,000 to Rs 2,000. The over-speeding fine depends upon the size of your vehicle.";
  let contentSix =
    "In this fast-paced world, everyone is in a rush, and you are not alone. Failure to obey traffic signals can result in a tragic collision. In addition, jumping red signals is prohibited, and violating this traffic rule can result in a fine of up to Rs 5,000 or imprisonment of one year. Apart from the signal, also keep your wheels behind the zebra crossing.";
  let contentSeven =
    "Keep your ears alert when driving and as soon as you hear sirens, instantly give a pass to the emergency vehicle. According to section 194E of the MV Act, not granting a pass to the hospital ambulance, fire ambulance, and other emergency vehicle is illegal. If you fail to do so, you could face a fine of up to Rs 10,000.";
  let contentEight =
    "While driving your car, make sure your number plate is clearly visible. Driving with a broken or damaged registration plate is illegal and is considered a serious offense.";
  let contentNine =
    "Driving a four-wheeler without a valid driver's license in your car or a digital version in a digital locker is unlawful in India and can result in a fine of up to Rs 5,000. Also, keep other essential documents such as RC, PUC, and insurance papers with you at all times while driving.";
  let contentTen =
    "Rash driving can lead to a severe car crash. If you enjoy speeding and overtaking cars for no reason, you are encouraging authorities to penalize you. In India, reckless driving is punishable by a fine of Rs 5,000.";
  return (
    <section class="flex flex-col">
      <div class="flex justify-center">
        <h1 class="font-bold text-2xl">
          Top 10 Most Important Traffic Rules For Car Drivers
        </h1>
      </div>
      <section>
        <Rules num="1" title="Do not drink and drive" content={contentOne} />
        <Rules num="2" title="Car Insurance" content={contentTwo} />
        <Rules
          num="3"
          title="Always wear your set belt"
          content={contentThree}
        />
        <Rules
          num="4"
          title="Don't use a mobile phone while driving"
          content={contentFour}
        />
        <Rules num="5" title="Avoid over-speeding" content={contentFive} />
        <Rules num="6" title="Follow traffic signals" content={contentSix} />
        <Rules
          num="7"
          title="Make way for emergency vehicles"
          content={contentSeven}
        />
        <Rules num="8" title="Number Plate" content={contentEight} />
        <Rules
          num="9"
          title="Always keep your driving license handy"
          content={contentNine}
        />
        <Rules num="10" title="Rash Driving" content={contentTen} />
      </section>
    </section>
  );
}
