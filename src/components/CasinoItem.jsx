import { Button, Accordion } from "react-bootstrap";

export default function CasinoItem({ item }) {
  return (
    <div className="my-card shadow">
      <div className="top-card d-flex gap-5 justify-content-around border rounded align-items-center text-center">
        <div className="border border-2 rounded">
          <img
            width={75}
            height={45}
            src={
              item.img ||
              "https://objects.kaxmedia.com/auto/o/5541/0dc5926cf4.png"
            }
          />
        </div>
        <div className="score d-flex flex-column">
          <h5>Our Score</h5>
          <h3 className="text-primary fs-1">{item.score}</h3>
        </div>
        <div className="d-flex flex-column">
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <span className={`${i <= item.rank ? "star" : "empty"}`} key={i}>
                {i > item.rank && "☆"}
              </span>
            ))}
          </div>
          <div>Views ({item.views})</div>
        </div>
        <div className="welcome-bonus d-flex flex-column">
          <ul>
            {item.welcomeBonuses.map((wb, k) => (
              <li key={k}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15 3 C 8.4 3 3 8.4 3 15 C 3 21.6 8.4 27 15 27 C 21.6 27 27 21.6 27 15 C 27 12.8 26.400391 10.8 25.400391 9 L 14.099609 20.300781 C 13.899609 20.500781 13.700391 20.599609 13.400391 20.599609 C 13.100391 20.599609 12.899219 20.500781 12.699219 20.300781 L 8.1992188 15.800781 C 7.7992188 15.400781 7.7992187 14.800391 8.1992188 14.400391 C 8.5992187 14.000391 9.1996094 14.000391 9.5996094 14.400391 L 13.400391 18.199219 L 24.199219 7.3007812 C 21.999219 4.7007813 18.7 3 15 3 z M 24.199219 7.3007812 C 24.699219 7.8007813 25.100391 8.4 25.400391 9 L 27.699219 6.6992188 C 28.099219 6.2992188 28.099219 5.6992188 27.699219 5.1992188 C 27.299219 4.7992188 26.700781 4.7992187 26.300781 5.1992188 L 24.199219 7.3007812 z"></path>
                </svg>
                {wb}
              </li>
            ))}
          </ul>
        </div>
        <Button>Get Bonus</Button>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Review</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
