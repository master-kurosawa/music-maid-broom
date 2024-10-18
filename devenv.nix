{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  languages.rust = {
    enable = true;
    channel = "nightly";
  };

  languages.typescript.enable = true;
  languages.javascript = {
    enable = true;
    bun.enable = true;
  };
}
