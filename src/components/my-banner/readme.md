# my-banner

A customizable banner component that displays rotating messages with configurable slide time.

## Properties

| Property    | Attribute    | Description                                     | Type       | Default                                           |
| ----------- | ------------ | ----------------------------------------------- | ---------- | ------------------------------------------------- |
| `messages`  | `messages`   | Array of messages to display                    | `string[]` | `['Welcome!', 'Special Offer!', 'New Products!']` |
| `slideTime` | `slide-time` | Time in milliseconds between message transitions | `number`   | `3000`                                            |

## Usage

```html
<my-banner 
  slide-time="2000" 
  messages='["Welcome!", "Special Offer!", "New Products!"]'>
</my-banner>
```