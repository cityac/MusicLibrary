import angular from "angular";
import uiGrid from "angular-ui-grid";
import 'angular-ui-grid/ui-grid.css'

import { textboxDirective } from "./textbox/textbox.directive";


export const common = angular.module("common",[uiGrid])
    .directive("textbox", textboxDirective)