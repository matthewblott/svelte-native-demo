import RadSideDrawerElement from "svelte-native-nativescript-ui/sidedrawer"

RadSideDrawerElement.register();

import { svelteNative } from 'svelte-native'
import App from './App.svelte'

svelteNative(App, {})
