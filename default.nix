with import <nixpkgs> {};

stdenv.mkDerivation rec {
  name = "nuxt-portfolio";
  allowUnfree= true;

  buildInputs = with pkgs; [
    nodejs
    yarn
    netlify-cli
  ];

  shellHook =
  ''
    source $HOME/.config/netlify/helper/path.bash.inc
  '';
}

