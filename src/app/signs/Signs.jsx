import Sign from "../components/Sign.jsx";

export default function Signs() {
  const one =
    "In India, all traffic signs are a must to follow. However, mandatory signs are compulsory and most important to follow. According to the Roadways and Traffic Department of India, failing to follow traffic rules and signs may incur a traffic penalty on the driver. It ensures that traffic movement remains smooth and pedestrians are aware of the movement of vehicles on the road, speed limit, no parking zones, etc.";
  const two =
    "Among other traffic signs in India, cautionary signs warn drivers about potential threats or safety hazards ahead on the road. Drivers should take necessary steps or slow down their vehicles according to cautionary signs given on the road. If you wonder how many traffic signs are there in India under the cautionary category, the answer is 40. For best understanding, the description of each sign is mentioned under their graphical symbol, although these symbols are self-explanatory.";
  const three =
    "Informatory signs are important traffic signs that help drivers with information about facility areas even without knowledge of the map. It tells about a hospital, petrol pump, public toilet, etc., in the nearest vicinity.";

  return (
    <div>
      <Sign
        num="1"
        title="Mandatory Traffic Signs"
        src="/mandatory-traffic-signs.jpg"
        content={one}
      />
      <hr></hr>
      <Sign
        num="2"
        title="Cautionary Traffic Signs"
        src="/cautionary-traffic-signs.jpg"
        content={two}
      />
      <hr></hr>
      <Sign
        num="3"
        title="Informatory Traffic Signs"
        src="/informative-traffic-signs.jpg"
        content={three}
      />
      <hr></hr>

      <h2 class="font-bold text-2xl">
        What Are the Functions of Traffic Signs in India?
      </h2>

      <div class="col-md-10 col-md-offset-1">
        <div>
          <div class="content-info-list">
            <h3 class="font-bold"></h3>

            <p>
            </p>
            <p>
              The various traffic signs used in India have an array of
              functions. These are -
            </p>
            <ul class="list-disc pl-8">
              <li>
                Supports drivers with information about the road, facility
                around, lane to drive in, etc.
              </li>
              <li>Ensures road discipline</li>
              <li>Provides road instructions</li>
              <li>
                Provides information about crossroads, potholes, curves, etc.
              </li>
              <li>Marks the entry and exit points</li>
              <li>Informs about parking areas</li>
              <li>
                Informs about maintaining the desired speed limit while crossing
                any institutes to prevent accidents
              </li>
            </ul>
            <p>
              There are several other types of traffic signals in India, such
              as:
            </p>
            <ul class="list-disc pl-8">
              <li>Hand signal by traffic police.</li>
              <li>Pavement marking or road marking signs.</li>
              <li>Traffic light signals</li>
            </ul>

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
