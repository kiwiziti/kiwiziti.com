{
  description = "kiwiziti.com static website";

  inputs = {
    nixpkgs.url = github:nixos/nixpkgs/nixpkgs-unstable;
    flake-utils.url = github:numtide/flake-utils;
    npmlock2nix = {
      url = github:nix-community/npmlock2nix;
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils, npmlock2nix }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages."${system}";
        npm = pkgs.callPackage npmlock2nix { };
      in
      rec {
        defaultPackage = npm.build {
          src = ./.;
          buildInputs = with pkgs; [ nodePackages.gatsby-cli vips ];
          buildCommands = [
            "export XDG_CONFIG_HOME=\"$(pwd)/.config\""
            "export GATSBY_TELEMETRY_DISABLED=1"
            "export GATSBY_CPU_COUNT=1"
            "npm run build -- --no-color --verbose"
          ];
          installPhase = "cp -r public/ $out/";
          nodejs = pkgs.nodejs-14_x;
          node_modules_mode = "copy";
        };
      }
    );
}
