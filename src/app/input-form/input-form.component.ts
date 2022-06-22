import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import { FormBuilder } from '@angular/forms';

//Phone input module
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { Country } from 'ngx-intl-tel-input/lib/model/country.model';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit{

  @Output() isSubmitted = new EventEmitter<{submitted: boolean}>();

  //Phone input variables
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.Ireland, CountryISO.UnitedKingdom, CountryISO.UnitedStates];
  selectedCountry: CountryISO = CountryISO.UnitedStates;

  //Form Variables
  formRequired!: FormGroup;
  // Regex strings used in form validation
  nameRegex = '^[a-zA-Z\'\-]+$';
  ethRegex = '^0x[a-fA-F0-9]{40}$';

  ngOnInit() {

    this.formRequired = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern(new RegExp(this.nameRegex))
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.pattern(this.nameRegex)
      ])),
      phoneNumber: new FormControl('', Validators.required),
      formOptional: new FormGroup({
        ethWallet: new FormControl('', Validators.compose([Validators.pattern(new RegExp(this.ethRegex)), Validators.minLength(1)]))
      })
    })
  }

  onSubmit(){
    //TODO: Add backend connection
    console.log(this.formRequired.value);
    this.isSubmitted.emit({submitted: true});
  }

  constructor() { }

}
