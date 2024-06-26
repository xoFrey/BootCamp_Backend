const FullStar = ({ deleteFav }) => {
    return <svg
        // className="w-20"
        width="50" height="50"
        onClick={() => deleteFav()}
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 512 512"
        viewBox="0 0 512 512" id="star"><polygon fill="#ffd759" points="102.6 494.1 137 320.1 6 200.5 182.1 179.5 255.3 17.9 329.7 178.9 506 198.6 375.9 319.2 411.6 492.9 256.8 406.4"></polygon><polygon fill="#fabd3b" points="256 256 6 200.5 137 320.1"></polygon><polygon fill="#fabd3b" points="256 256 102.6 494.1 256.8 406.4 411.6 492.9"></polygon><polygon fill="#fabd3b" points="256 256 506 198.6 375.9 319.2"></polygon><polygon fill="#fabd3b" points="255.3 17.9 256 256 329.7 178.9"></polygon></svg>;
};

export default FullStar;