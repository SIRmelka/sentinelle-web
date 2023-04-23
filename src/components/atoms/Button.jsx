import React from "react";

export default function Button({ className }) {
  return (
    <>
      <label htmlFor="my-modal-6" className={className}>
        Voir
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Oops</h3>
          <p className="py-4">
            Cette fonctionalité n'est pas encore disponible pour le
            moment.veuilez téléchrger l'application pour avoir accès à toutes
            les fonctionnalités
          </p>
          <div className="modal-action">
            <a
              href="https://about-sentinelle.vercel.app/sentinelle.apk"
              target="blank"
            >
              {" "}
              <button className="btn btn-accent">Telecharger</button>{" "}
            </a>
            <label htmlFor="my-modal-6" className="btn">
              D'accord
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
