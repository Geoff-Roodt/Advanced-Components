import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector:'native-encapsulation',
  styles:[`
      .highlight {
        border: 2px solid black;
        text-align: center;
        border-radius: 3px;
        margin-bottom: 20px;
    `],
  template:`
    <h4 class="ui horizontal divider header">Native encapsulation example</h4>
    <div class="highlight">This component uses <code>ViewEncapsulation</code></div>
  `,
  encapsulation: ViewEncapsulation.Native
})

export class NativeEncapsulationComponent{
  
}
