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
          buildInputs = with pkgs; [ ];
          preInstallLinks = {
            "node-gyp-build" = pkgs.nodePackages.node-gyp-build;
          };
          GATSBY_TELEMETRY_DISABLED=1;
          GATSBY_CPU_COUNT=1;
          buildCommands = [
            "export XDG_CONFIG_HOME=\"$(pwd)/.config\""
            "npm run build -- --no-color --verbose"
          ];
          installPhase = "cp -r public/ $out/";
          nodejs = pkgs.nodejs-14_x;
          node_modules_mode = "copy";
        };
      }
    );
}
