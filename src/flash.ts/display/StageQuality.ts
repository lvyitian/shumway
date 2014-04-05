/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: StageQuality
module Shumway.AVM2.AS.flash.display {
  import notImplemented = Shumway.Debug.notImplemented;
  export class StageQuality extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor () {
      false && super();
      notImplemented("Dummy Constructor: public flash.display.StageQuality");
    }
    
    // JS -> AS Bindings
    static LOW: string = "low";
    static MEDIUM: string = "medium";
    static HIGH: string = "high";
    static BEST: string = "best";
    static HIGH_8X8: string = "8x8";
    static HIGH_8X8_LINEAR: string = "8x8linear";
    static HIGH_16X16: string = "16x16";
    static HIGH_16X16_LINEAR: string = "16x16linear";
    
    
    // AS -> JS Bindings
    
  }
}