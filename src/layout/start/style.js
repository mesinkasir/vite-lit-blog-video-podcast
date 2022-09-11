import { css } from 'lit';

export const styles = [
  css`
    :host {
      display: flex;
      color: #040424;
      height: 100%;
      overflow: hidden;
      justify-content: center;
      --card-color: purple;
      --card-text-color: white;
      --detail-color: #d0ccd5;
      --detail-text-color: rgb(37, 35, 35);
      --accent-color: rgb(37, 35, 35);
      --divider: 5px solid var(--accent-color);
      --border: 2px solid var(--accent-color);
      --border-radius: 8px;
    }
    * {
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    .fit {
      position: absolute;
      inset: 10;
    }

    a {color:purple; text-decoration:none;}

    .divider {
      will-change: opacity;
      border-bottom: var(--divider);
    }

    .divider-top {
      will-change: opacity;
      border-top: var(--divider);
    }

    .container {
      width: 600px;
      position: relative;
    }

    .cards {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
    }

    li {
      will-change: transform;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: 1;
      flex-basis: 85%;
      cursor: pointer;
      font-size:10px;
      margin: 2px;
      padding: 12px;
      border-radius: var(--border-radius);
      background: var(--card-color);
      color: var(--card-text-color);
    }

    .card-background {
      will-change: opacity;
      border-radius: var(--border-radius);
      border: var(--border);
    }

    .card-content {
      flex: 1;
      display: flex;
      align-items: center;
      font-weight: 400;
      justify-content: center;
    }

    .card-header {
      padding: 2px;
      min-height: 5px;
      font-size: 12px;
      padding-left: 20px;
    }

    .video {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
    }
    .video iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 3px;
      border-radius: 8px;
      border-style: solid;
      border-color: white;
      background-color: #222;
    }
    .card-header-title {
      font-weight: 100;
    }

    .detail {
      will-change: transform;
      display: flex;
      flex-direction: column;
      flex: 1;
      color: var(--detail-text-color);
      margin: 2px;
      padding: 4px;
      border-radius: 2px;
      overflow: hidden;
      background: var(--detail-color);
      border-radius: var(--border-radius);
      border: var(--border);
    }

    .detail-header {
      display: flex;
    }

    .detail-header-title {
      font-weight: 400;
    }

    .hero-text {
      will-change: transform;
      display: inline-block;
      width: 300px;
    }

    .detail-header-text {
      margin-left: 8px;
    }
    .slug {padding:10px; margin-left: 20px;}

    .title {font-size:14px;}
    .slim {
      font-size:10px;
    }
    p {font-size: 11px;}
    .detail-content {
      padding: 5px;
      font-weight: 400;
      line-height: 100%;
    }
  `,
];
