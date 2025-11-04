/**
 * Asset loading type definitions
 */

export interface AssetDefinition {
  name: string;
  url: string;
  type: 'texture' | 'audio' | 'font' | 'json' | 'shader';
}

export interface TextureAsset extends AssetDefinition {
  type: 'texture';
  width?: number;
  height?: number;
}

export interface AudioAsset extends AssetDefinition {
  type: 'audio';
  volume?: number;
  loop?: boolean;
}

export interface FontAsset extends AssetDefinition {
  type: 'font';
  family: string;
}

export interface JsonAsset extends AssetDefinition {
  type: 'json';
}

export interface ShaderAsset extends AssetDefinition {
  type: 'shader';
  vertex?: string;
  fragment?: string;
}

export type Asset = TextureAsset | AudioAsset | FontAsset | JsonAsset | ShaderAsset;

export interface AssetManifest {
  textures: TextureAsset[];
  audio: AudioAsset[];
  fonts: FontAsset[];
  data: JsonAsset[];
  shaders: ShaderAsset[];
}
